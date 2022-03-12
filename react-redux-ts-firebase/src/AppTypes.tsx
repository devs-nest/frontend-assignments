export type UserRefType =
  | firebase.firestore.DocumentReference<
      firebase.firestore.DocumentData
    >
  | undefined

export type UnsubscribeType = firebase.Unsubscribe | null

export type UserType =
  | {
      id: string
      cretedAt?: string
      displayName?: string
      email?: string
    }
  | firebase.User
  | null
