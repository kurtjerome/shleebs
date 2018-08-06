import React from 'react'
import Masonry from 'react-masonry-component'

import Layout from '../components/Layouts/general-layout'
import {
  Title,
  SubTitle,
  Container,
  TitleWrapper,
  PostPreview,
  PostImage,
  PostTimestamp,
  PostTitle,
  PostContent
} from '../page-styles/stories.style'

const StoriesPage = () => (
  <Layout>
    <Container>
      <Masonry disableImagesLoaded={true} options={{ transitionDuration: 0 }}>
        <TitleWrapper>
          <Title>Stories</Title>
          <SubTitle>
            A fun subtitle. Probably throw some clever pun in there.
          </SubTitle>
        </TitleWrapper>
        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Look at Me. I Don't Have an Image!</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostImage />
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Another One of Those Nonsensical Titles</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>

        <PostPreview>
          <PostTimestamp>2 Jul 2018</PostTimestamp>
          <PostTitle to="/">Again With The Imageless Post</PostTitle>
          <PostContent>
            Well, here I am. Front and center stage, finally. For the last, well
            let’s say, ten months, I have been telling myself, “Shelb, you
            really need to start writing more. More to the world in addition…
          </PostContent>
        </PostPreview>
      </Masonry>
    </Container>
  </Layout>
)

export default StoriesPage
