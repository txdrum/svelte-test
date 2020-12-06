const sampleData = {
  shops: [
    {
      name: 'hogehoge',
      link: 'http://hogehoge.com',
      tags: [
        'aaa',
        'bbb'
      ]
    }
  ]
}

export default class DataLoader {
  load = () => {
    return sampleData
  }
}
