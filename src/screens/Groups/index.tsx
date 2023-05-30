import { Header } from "@components/Header"
import { Container } from "./styles"
import { Subtitle } from "@components/Subtitle"
import { GroupCard } from "@components/GroupCard"

export function Groups() {
  return (
    <Container>
      <Header />
      <Subtitle title='Turmas' subtitle='Jogue com sua turma' />
      <GroupCard title='Galera' />
    </Container>
  )
}
