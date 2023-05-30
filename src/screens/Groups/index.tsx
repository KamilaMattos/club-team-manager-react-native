import { useState } from "react"
import { FlatList } from "react-native"

import { Header } from "@components/Header"
import { Container } from "./styles"
import { Subtitle } from "@components/Subtitle"
import { GroupCard } from "@components/GroupCard"

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera do futebol"])

  return (
    <Container>
      <Header />
      <Subtitle title='Turmas' subtitle='Jogue com sua turma' />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}
