import * as React from 'react';
import {
  ScrollView,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  TouchableOpacity,
  processColor,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {LineChart, PieChart} from 'react-native-charts-wrapper';

const your_wallet = 0;
// Visualize Data for avergase cost in a Geographical area, prior trends, and forecast
const average_cost_for_state = 0;
const average_cost_for_state_plus_tax = 0;
const one_forecast = 0;

const diversityInsightdata = {
  legend: {
    enabled: true,
    textSize: 15,
    form: 'CIRCLE',

    horizontalAlignment: 'RIGHT',
    verticalAlignment: 'CENTER',
    orientation: 'VERTICAL',
    wordWrapEnabled: true,
  },
  data: {
    dataSets: [
      {
        values: [
          {value: 45, label: 'Asian'},
          {value: 21, label: 'Black'},
          {value: 15, label: 'Hispanic'},
          {value: 9, label: 'Parcific'},
          {value: 15, label: 'White'},
        ],
        label: 'Ethnic Group',
        config: {
          colors: [
            processColor('#C0FF8C'),
            processColor('#FFF78C'),
            processColor('#FFD08C'),
            processColor('#8CEAFF'),
            processColor('#FF8C9D'),
          ],
          valueTextSize: 15,
          valueTextColor: processColor('green'),
          sliceSpace: 5,
          selectionShift: 13,
          valueFormatter: "#.#'%'",
          valueLineColor: processColor('green'),
          valueLinePart1Length: 0.5,
        },
      },
    ],
  },
  highlights: [{x: 2}],
  description: {
    text: 'Diversity',
    textSize: 20,
    textColor: processColor('black'),
  },
};

const historicalAveragePriceChart = {
  homevValueIndexData: {
    dataSets: [
      {
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        values: [
          {x: 5, y: 90},
          {x: 10, y: 130},
          {x: 50, y: 2000, marker: 'eat more'},
          {x: 80, y: 9000, marker: 'eat less'},
        ],
        label: 'Home Value Index',
      },
    ],
  },
};

const DemographicData2015 = require('./DataSets/2015Demographic.json');
const DemographicData2017 = require('../DataSets/2017Demographic.json');
const HomeValueForecast = require('./DataSets/HomeValueForecast.json');

function getDiversityInsights(Location) {
  for (let state of DemographicData2017) {
    console.log(Location == state);
    if (Location == state) {
      return {
        dataSets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            values: [
              state.AvgOfHispanic,
              state.AvgOfWhite,
              state.AvgOfBlack,
              state.AvgOfNative,
              state.AvgOfAsian,
              state.AvgOfPacific,
            ],
            label: 'Diversity Report',
          },
        ],
      };
    }
  }
  return {};
}

export default function OrderScreen() {
  const location = 'Alabama';
  return (
    <View>
      <View style={styles.zfundText}>
        <Text style={styles.zWalletText}>Zfunds: $20,000</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Location"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />
      </View>

      {/* <ScrollView vertical={true} style={styles.outerDiv}> */}
      {/* <View style={styles.map}>
        <MapView
        style={{ flex: 1 }}
        showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View> */}

      <View >
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={historicalAveragePriceChart.homevValueIndexData}
            xAxis={getDiversityInsights(location).xAxis}
            //   yAxis={debuggChart.volumeData.yAxis}
            group="stock"
            identifier="volume"
            syncX={true}
            syncY={true}
            visibleRange={{x: {min: 1, max: 100}}}
            dragDecelerationEnabled={false}
            doubleTapToZoomEnabled={false} // it has to be false!!
          />
        </View>

        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('#bc98fa')}
            chartDescription={diversityInsightdata.description}
            data={diversityInsightdata.data}
            legend={diversityInsightdata.legend}
            highlights={diversityInsightdata.highlights}
            extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}
            entryLabelColor={processColor('green')}
            entryLabelTextSize={20}
            entryLabelFontFamily={'HelveticaNeue-Medium'}
            drawEntryLabels={true}
            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{
              // text: 'Pie center text!',
              color: processColor('pink'),
              fontFamily: 'HelveticaNeue-Medium',
              size: 20,
            }}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={45}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={350}
            // onSelect={this.handleSelect.bind(this)}
            // onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  zWalletText: {
    fontWeight: 'bold',
  },
  outerDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    //flex: 1,
    backgroundColor: '#9054f7',
    alignContent: 'center',
    width: '85%',
    height: '40%',
  },
  zfundText: {
    alignItems: 'center',
  },
  pieChart: {
    //flex: 1,
    alignContent: 'center',
    width: '85%',
    height: '40%',
  },
  chart: {
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: ' 80%',
  },
});

// return [
//   [
//     'AvgOfHispanic',
//     'AvgOfWhite',
//     'AvgOfBlack',
//     'AvgOfNative',
//     'AvgOfAsian',
//     'AvgOfPacific',
//   ],
//   [
//     state.AvgOfHispanic,
//     state.AvgOfWhite,
//     state.AvgOfBlack,
//     state.AvgOfNative,
//     state.AvgOfAsian,
//     state.AvgOfPacific,
//   ],
// ];
