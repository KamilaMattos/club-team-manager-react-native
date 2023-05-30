import { useState } from "react"
import { FlatList } from "react-native"

import { Header } from "@components/Header"
import { Container } from "./styles"
import { Subtitle } from "@components/Subtitle"
import { GroupCard } from "@components/GroupCard"
import { EmptyList } from "@components/EmptyList"

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />
      <Subtitle title='Turmas' subtitle='Jogue com sua turma' />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message='Ainda não há turmas cadastradas' />
        )}
      />
    </Container>
  )
}
