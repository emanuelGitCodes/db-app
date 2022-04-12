const eventData = [
  {
    eventLogo: `FA`,
    eventOrg: `Proud Nord`,
    eventImage: `data:image/jpeg;base64,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`,
    eventTitle: `You're Finally Awake`,
    eventDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati sapiente velit natus dolorum laboriosam sequi mollitia hic. Fuga ex reiciendis unde nobis natus perferendis, ipsam alias. Excepturi, ullam nam?',
    eventTime: `2 pm`,
    eventDate: `03/18/2022`
  },
  {
    eventLogo: `DB`,
    eventOrg: `Proud Nord`,
    eventImage: `src/assets/images/knightro.jpg`,
    eventTitle : `Data Base`,
    eventDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem voluptate expedita error. At minus tempora officiis? Corrupti ipsum molestias iste voluptatem ut similique recusandae excepturi, quia expedita exercitationem officia.`,
    eventTime : `1 pm`,
    eventDate :`Today`
  },
  {
    eventLogo: `BD`,
    eventOrg: `Proud Nord`,
    eventImage: `src/assets/images/knightro.jpg`,
    eventTitle : `Big Data`,
    eventDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem voluptate expedita error. At minus tempora officiis? Corrupti ipsum molestias iste voluptatem ut similique recusandae excepturi, quia expedita exercitationem officia.`,
    eventTime : `3 pm`,
    eventDate :`Tomorrow`
  },
  {
    eventLogo: `ES`,
    eventOrg: `Proud Nord`,
    eventImage: `src/assets/images/knightro.jpg`,
    eventTitle : `Embedded Systems`,
    eventDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem voluptate expedita error. At minus tempora officiis? Corrupti ipsum molestias iste voluptatem ut similique recusandae excepturi, quia expedita exercitationem officia.`,
    eventTime : `4 pm`,
    eventDate :`Today`
  },
  {
    eventLogo: `LC`,
    eventOrg: `Proud Nord`,
    eventImage: `src/assets/images/knightro.jpg`,
    eventTitle : `Linear Circuits`,
    eventDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem voluptate expedita error. At minus tempora officiis? Corrupti ipsum molestias iste voluptatem ut similique recusandae excepturi, quia expedita exercitationem officia.`,
    eventTime : `5 pm`,
    eventDate :`Today`
  },
]

export default eventData