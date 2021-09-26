import * as React from 'react';

import {BarChart} from 'react-native-charts-wrapper';
import {ScrollView,
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TextInput,
    TouchableOpacity,
    processColor, } from 'react-native';

const cashFlow = {
    legend: {
      enabled: true,
      textSize: 14,
      form: 'SQUARE',
      formSize: 14,
      xEntrySpace: 10,
      yEntrySpace: 5,
      formToTextSpace: 5,
      wordWrapEnabled: true,
      maxSizePercent: 0.5
    },
    data: {
      dataSets: [{
        values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
        label: 'Cashflow',
        config: {
          color: processColor('teal'),
          barShadowColor: processColor('lightgrey'),
          highlightAlpha: 90,
          highlightColor: processColor('red'),
        }
      }],

      config: {
        barWidth: 0.7,
      }
    },
    highlights: [{x: 3}, {x: 6}],
    xAxis: {
      valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      granularityEnabled: true,
      granularity : 1,
    }
  };

export default function OrderScreen() {
    return (
        <View style={{flex: 1}}>
        <View style={{height:80}}>
          <Text> selected entry</Text>
          <Text> {cashFlow.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            data={cashFlow.data}
            xAxis={cashFlow.xAxis}
            animation={{durationX: 2000}}
            legend={cashFlow.legend}
            gridBackgroundColor={processColor('#9054f7')}
            visibleRange={{x: { min: 5, max: 5 }}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
       //flex: 1,
        alignContent: 'center',
        width: '85%',
        height: '40%',
    },
    chart: {
      flex: 1
    }
  });