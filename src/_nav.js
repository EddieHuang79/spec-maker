export default {
  items: [
    {
      name: '列表規格',
      url: '/list',
      icon: 'icon-puzzle',
      children: [
        {
          name: '一般列表',
          url: '/ListSpec/NormalList',
          icon: 'icon-list'
        }
      ]
    },
    {
      name: '表單規格',
      url: '/input',
      icon: 'icon-puzzle',
      children: [
        {
          name: '一般表單',
          url: '/InputSpec/NormalInput',
          icon: 'icon-pencil'
        },
        {
          name: '關聯式選單',
          url: '/InputSpec/RelationSelect',
          icon: 'icon-pencil'
        }
      ]
    },
  ]
}
