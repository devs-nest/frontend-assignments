const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      id: 1,
      linkUrl: '/shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      id: 2,
      linkUrl: '/shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      id: 3,
      linkUrl: '/shop/sneakers'
    },
    {
      title: 'women',
      imageUrl:
        'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
      size: 'large',
      id: 4,
      linkUrl: '/shop/womens'
    },
    {
      title: 'men',
      imageUrl:
        'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80',
      size: 'large',
      id: 5,
      linkUrl: '/shop/mens'
    }
  ]
}

const directoryReducer = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
