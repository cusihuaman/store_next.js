// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title:'Figurita octocat',
      price:100,
      image:'http://localhost:3000/img/stickers.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
    {
      id:1,
      title:'Gorra',
      price:200,
      image:'http://localhost:3000/img/gorragit.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
    {
      id:2,
      title:'Mochila de gitHub',
      price:250,
      image:'http://localhost:3000/img/mochilaGit.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
    {
      id:3,
      title:'Memoria USB',
      price:150,
      image:'http://localhost:3000/img/usbgit.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
    {
      id:4,
      title:'Termo de gitHub',
      price:550,
      image:'http://localhost:3000/img/termogit.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
    {
      id:5,
      title:'Polera de gitHob',
      price:750,
      image:'http://localhost:3000/img/poleragit.webp',
      description:' La lógica es la ciencia que estudia la corrección de los razonamientos, tanto formales como no formales, por eso esta'
    },
  ])
}
