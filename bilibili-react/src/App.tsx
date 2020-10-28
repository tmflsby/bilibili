import * as React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Switch } from "react-router-dom";
import router, { NestedRoute, StatusRoute } from "./router";
import Context, { context } from "./context";
import "./assets/stylus/icon.styl";
import "./app.styl";

class App extends React.Component {
  render() {
    return (
      <Context.Provider value={context}>
        <div className="view">
          <Helmet>
            <title>哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</title>
            <meta name="title" content="哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"/>
            <meta name="description" content="bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。大家可以在这里找到许多欢乐。"/>
            <meta name="keywords" content="Bilibili,哔哩哔哩,哔哩哔哩动画,哔哩哔哩弹幕网,弹幕视频,B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,二次元,游戏视频,ACG,galgame,动画,番组,新番,初音,洛天依,vocaloid,日本动漫,国产动漫,手机游戏,网络游戏,电子竞技,ACG燃曲,ACG神曲,追新番,新番动漫,新番吐槽,巡音,镜音双子,千本樱,初音MIKU,舞蹈MMD,MIKUMIKUDANCE,洛天依原创曲,洛天依翻唱曲,洛天依投食歌,洛天依MMD,vocaloid家族,OST,BGM,动漫歌曲,日本动漫音乐,宫崎骏动漫音乐,动漫音乐推荐,燃系mad,治愈系mad,MAD MOVIE,MAD高燃"/>
          </Helmet>
          <Switch>
            {
              router.map((route, i) => <NestedRoute {...route} key={i}/>)
            }
            <Redirect from="/" to="/index" exact={true}/>
            <StatusRoute code={404}>
              <div>
                <h1>NOT FOUND</h1>
              </div>
            </StatusRoute>
          </Switch>
        </div>
      </Context.Provider>
    )
  }
}

export default App
