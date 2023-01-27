import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero"

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle='blog' pageDesc='blog no kizi itiran'/>
    <Hero
      title="Blog"
      subtitle="Recent Posts"
      />
      </Container>
  )
}