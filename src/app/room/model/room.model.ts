export interface Room {
  id: number
  name: string
  isPrivate: boolean
  createdAt: string
  modifiedAt: string
  documentCount: number
}

export interface RoomCollection {
  rooms: Room[]
  count: number
}
