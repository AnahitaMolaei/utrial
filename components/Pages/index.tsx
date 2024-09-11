import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "آب و هوا"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh" }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, marginLeft: "auto", marginRight: "auto", width: "calc(60% - 20px)", backgroundImage: "url('/sky.jpg')", height: 900, backgroundSize: "cover" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}

        <br-x /><br-x /><br-x />


        <p style={{ textAlign: "center", fontSize: 50, color: "black", fontFamily: "OFL" }}>
          weather
        </p>

        <br-x /> <br-x /> <br-x />


        <div style={{ height: 200, width: "97%", backgroundColor: "gainsboro", borderRadius: 30, color: "black", border: "3px solid gainsboro", fontSize: 20, marginLeft: "auto", marginRight: "auto" }}>

          <div style={{ backgroundColor: "lch(100 0.03 277.8 / 0)", width: "100%", height: 70, borderRadius: 30 }}>
            <img src="https://cdn.ituring.ir/research/61/loc.png" style={{ marginLeft: 10, marginTop: 5 }} />
            <span style={{ fontSize: 28 }}>{props.loc} </span>


            <br-xx />
            <span style={{ fontSize: 20, color: "gray", marginLeft: 10 }}>{props.date} </span>


          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
            <div style={{ width: "60%", height: 120, backgroundColor: "lch(100 0.03 277.8 / 0)", borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "left", fontSize: 50 }}>
              <img src="https://cdn.ituring.ir/research/61/sun.webp" style={{ width: 100, height: 100 }} />
              <span style={{ fontSize: 50 }}>{props.feelslikec}° C</span>


            </div>

            <div style={{ width: "40%", height: 120, backgroundColor: "lch(100 0.03 277.8 / 0)", borderRadius: 15, display: "flex" }}>
              <span style={{ marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>
                {props.sunny}<br />
                {props.feelslikef}° F <br />
                Feels like {props.feelslikec}°
              </span>


            </div>
          </div>
        </div>
        <br-x />
        <div style={{ height: 500, width: "97%", backgroundColor: "gainsboro", borderRadius: 30, marginLeft: "auto", marginRight: "auto" }}>
          <br /><br />
          <f-csb style={{marginLeft:16}}>
            <f-cc style={{fontSize:28 , color:"dimgray" }}> <img src="https://cdn.ituring.ir/research/61/uv3.png" style={{ width: 55, height: 55 }}/>&nbsp;UV Index</f-cc>
            <f-16b style={{fontSize:28 , paddingRight:50 , color:"dimgray"  }}>{props.uv}</f-16b>
          </f-csb>
          <br-x/><br-x/>
          <hr style={{marginLeft:50, marginRight:50}}/>
          <br-x/>
          <f-csb  style={{marginLeft:10}}>
            <f-cc style={{fontSize:28, color:"dimgray"  }}> <img src="https://cdn.ituring.ir/research/61/ris.png" style={{ width: 75, height: 75 }}/> Sunrise</f-cc>
            <f-16b style={{fontSize:28 , paddingRight:50  , color:"dimgray" }}>{(props.sunrise) as number}</f-16b>
          </f-csb>
          <br-x/>
          <hr style={{marginLeft:50, marginRight:50}}/>
          <br-x/>
          <f-csb  style={{marginLeft:17}} >
            <f-cc style={{fontSize:28 , color:"dimgray"  }}> <img src="https://cdn.ituring.ir/research/61/sunset.png" style={{ width: 70, height: 70 }}/> Sunset</f-cc>
            <f-16b style={{fontSize:28 , paddingRight:50 , color:"dimgray"  }}>{(props.sunset) as number}</f-16b>
          </f-csb>
          <br-x/>
          <hr style={{marginLeft:50, marginRight:50}}/>
          <br/><br-x/>
          <f-csb style={{marginLeft:27}} >
            <f-cc style={{fontSize:28 , color:"dimgray" }}> <img src="https://cdn.ituring.ir/research/61/hum.png" style={{ width: 40, height: 40}}/>&nbsp; Humidity</f-cc>
            <f-16b style={{fontSize:28 , paddingRight:50, color:"dimgray"  }}>{props.humidity}%</f-16b>
          </f-csb>
          <br/><br-x/>
          
          <hr style={{marginLeft:50, marginRight:50}}/>
          <br/><br-x/>
          <f-csb style={{marginLeft:27}} >
            <f-cc style={{fontSize:28, color:"dimgray" }}> <img src="https://cdn.ituring.ir/research/61/pres.png" style={{ width: 45, height: 45 }}/>&nbsp; Pressure</f-cc>
            <f-16b style={{fontSize:28 , paddingRight:50, color:"dimgray"  }}>{props.pressure}<sub>PA</sub></f-16b>
          </f-csb>


        </div>

        <br-x />
        <footer style={{ textAlign: "center", fontSize: 20 }}>

          rutherford
        </footer>

      </Window >
    </div >
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let data = await ( await fetch("https://cdn.ituring.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure
  let date = data.current_condition[0].localObsDateTime
  let uv = data.current_condition[0].uvIndex
  let loc = data.nearest_area[0].areaName[0].value
  let sunny = data.current_condition[0].weatherDesc[0].value
  let feelslikef = data.current_condition[0].FeelsLikeF
  let sunrise = data.weather[0].astronomy[0].sunrise
  let sunset = data.weather[0].astronomy[0].sunset


  return {
    props: {
      data: global.QSON.stringify({
        sunrise,
        sunset,
        feelslikec,
        feelslikef,
        humidity,
        sunny,
        pressure,
        date,
        uv,
        loc,
        session,
        // nlangs,
      })
    },
  }
}