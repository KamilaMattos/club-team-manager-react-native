import { Header } from "@components/Header"
import { Container, Content, Icon } from "./styles"
import { Subtitle } from "@components/Subtitle"
import { Button } from "@components/Button"
import { Input } from "@components/Input"

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Subtitle
          title='Nova turma'
          subtitle='crie uma turma para adicionar pessoas'
        />
        <Input placeholder='Nome da turma' />
        <Button title='Criar' />
      </Content>
    </Container>
  )
}
