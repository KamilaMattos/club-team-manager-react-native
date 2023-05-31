import { Input } from "@components/Input"
import { Header } from "@components/Header"
import { Subtitle } from "@components/Subtitle"
import { ButtonIcon } from "@components/ButtonIcon"
import { Container, Form } from "./styles"

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Subtitle
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />
      <Form>
        <Input placeholder='Nome do jogador' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>
    </Container>
  )
}
