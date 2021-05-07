import React from 'react'
import {Container} from './styles'

interface ImageProps {
    image: string
}
const Image: React.FC<ImageProps> = ({
     image,
     ...ImageProps
 }) => (
    <Container
        src={image}
    />
 )

 export default Image;