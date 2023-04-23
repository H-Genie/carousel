import Carousel from "Carousel"
import "./App.css"

const App = () => {
  const content = [
    {
      title: "첫번째 사진",
      description: "첫번째 설명입니다",
      img: "http://placeimg.com/480/480/animals/1"
    },
    {
      title: "두번째 사진",
      description: "두번째 설명입니다",
      img: "http://placeimg.com/480/480/animals/2"
    },
    {
      title: "세번째 사진",
      description: "세번째 설명입니다",
      img: "http://placeimg.com/480/480/animals/3"
    },
  ]

  return (
    <div className="App">
      <Carousel content={content} />
    </div>
  )
}

export default App