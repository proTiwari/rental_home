import React from "react";
import styled from "styled-components";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useEffect } from "react";
import { useRef } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { TvShow } from "../tvShow";
import { Button } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

const SearchBarContainer = styled(motion.div)`
  display: inline-block;
  width: 40em;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 12px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const SearchInputContainer = styled.div`
  width: 96%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 4px;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 23px;
  margin-right: 4px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 80em;
  box-sizing: border-box;
  padding: 1em;
  overflow-y: auto;
  position: absolute;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

export function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [noTvShows, setNoTvShows] = useState(false);

  const isEmpty = !tvShows || tvShows.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoTvShows(false);

    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setNoTvShows(false);
    setTvShows([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  return (
    <div style={{ display: "flex" }}>
      <SearchBarContainer
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={containerTransition}
        ref={parentRef}
      >
        <div style={{ display: "flex" }}>
          <SearchInputContainer>
            <SearchIcon>
              <IoSearch />
            </SearchIcon>
            <SearchInput
              placeholder="Search for Room/Home"
              onFocus={expandContainer}
              ref={inputRef}
              value={searchQuery}
              onChange={changeHandler}
            />

            <AnimatePresence>
              {isExpanded && (
                <CloseIcon
                  key="close-icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={collapseContainer}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose />
                </CloseIcon>
              )}
            </AnimatePresence>

          </SearchInputContainer>
          <Button
              variant="contained"
              color="secondary"
              startIcon={<RoomIcon/>}
              style={{marginLeft: "0.1rem"}}
              align="center"
          />
        </div>

        {isExpanded && <LineSeperator />}

        {isExpanded && (
          <SearchContent>
            {isLoading && (
              <LoadingWrapper>
                <MoonLoader loading color="#000" size={20} />
              </LoadingWrapper>
            )}
            {!isLoading && isEmpty && !noTvShows && (
              <LoadingWrapper>
                <WarningMessage>Start typing to Search</WarningMessage>
              </LoadingWrapper>
            )}
            {!isLoading && noTvShows && (
              <LoadingWrapper>
                <WarningMessage></WarningMessage>
              </LoadingWrapper>
            )}

            {!isLoading && !isEmpty && (
              <>
                {tvShows.map(({ show }) => (
                  <TvShow
                    key={show.id}
                    thumbanilSrc={show.image && show.image.medium}
                    name={show.name}
                    rating={show.rating && show.rating.average}
                  />
                ))}
              </>
            )}
          </SearchContent>
        )}
      </SearchBarContainer>

    </div>
  );
}
