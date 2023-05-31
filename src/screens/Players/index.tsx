import { Header } from "@components/Header"
import { Container } from "./styles"
import { Subtitle } from "@components/Subtitle"

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Subtitle
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />
    </Container>
  )
}
