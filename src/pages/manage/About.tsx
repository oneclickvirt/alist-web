import { createResource } from "solid-js"
import { Markdown, MaybeLoading } from "~/components"
import { useT, useManageTitle } from "~/hooks"

const fetchReadme = async () =>
  await (
    await fetch(
      "https://raw.githubusercontent.com/oneclickvirt/.github/refs/heads/main/profile/README.md",
    )
  ).text()

const About = () => {
  const t = useT()
  useManageTitle("manage.sidemenu.about")
  const [readme] = createResource(fetchReadme)
  return (
    <MaybeLoading loading={readme.loading}>
      <Markdown children={readme()} />
    </MaybeLoading>
  )
}

export default About
