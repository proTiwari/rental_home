import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import bright from "../../images/bright.png"
import dark from "../../images/dark.png"

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    const imagesPath = {
        light: bright,
        black: dark
      }
    const [open,setOpen] = useState(true)
    const [image, setImage] = useState(imagesPath['black'])

    const getImageName = () => open ? 'black' : 'light'
    let imageName = getImageName()
    // // When mounted on client, now we can show the UI
     useEffect(() => setImage, [open])

    

    return (
      
        <img
            src={open? imagesPath['black'] : imagesPath['light']} 
            onClick={() => setOpen(!open)}
            width={40}
            height={40}
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
            
            onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
           
        >

 
        </img>
       
    )
}

export default ThemeSwitch


// const imagesPath = {
//     minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
//     plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png"
//   }
  
//   class App extends React.Component {
//     state = {
//       open: true
//     }
//     toggleImage = () => {
//       this.setState(state => ({ open: !state.open }))
//     }
  
//     getImageName = () => this.state.open ? 'plus' : 'minus'
  
//     render() {
//       const imageName = this.getImageName();
//       return (
//         <div>
//           <img style={{maxWidth: '50px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
//         </div>
//       );
//     }
//   }