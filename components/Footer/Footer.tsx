import { Center } from "../Center/style";
import { Container } from "./style";

export const Footer = () => {
   const currentYear = new Date().getFullYear()

   return (
      <Container>
         <Center>
            <a href="https:kgopinion.com">
               KgOpinion.com
            </a> {currentYear}
         </Center>
      </Container>
   )
}