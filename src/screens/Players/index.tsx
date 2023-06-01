import { useState } from "react"
import { FlatList } from "react-native"

import { Input } from "@components/Input"
import { Filter } from "@components/Filter"
import { Header } from "@components/Header"
import { Subtitle } from "@components/Subtitle"
import { ButtonIcon } from "@components/ButtonIcon"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"

export function Players() {
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState([])

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

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}
