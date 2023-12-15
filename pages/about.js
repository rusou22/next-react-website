import Meta from 'components/meta'
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";

export default function About() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="about development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch} //画像は１つの図版として<figure>でマークアップ//
          alt=""
          layout="responsive"   //可変サイズのレスポンシブイメージのコードを生成するように指定。//
          sizes="(main-width:1152px) 1152px,100vw"  //レスポンシブイメージの画像セットの中から、画面幅い応じて最適なサイズの画像を選択するように指定。//
                  priority
                  placeholder="blur" //ブレースホルダとして画像を表示する(滑らかに画像を表示される)//
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって、「モノ」と向き合い制作をし、フィールドバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことはちいさなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}



/* P198まで終わった */