import IconInsertChartFill0Wght100Grad0Opsz48 from '../components/InsertChartFill0Wght100Grad0Opsz48'
import IconInsertChartFill0Wght200Grad0Opsz48 from '../components/InsertChartFill0Wght200Grad0Opsz48'
import IconInsertChartFill0Wght300Grad0Opsz48 from '../components/InsertChartFill0Wght300Grad0Opsz48'
import IconInsertChartFill0Wght400Grad0Opsz48 from '../components/InsertChartFill0Wght400Grad0Opsz48'
import IconInsertChartFill0Wght500Grad0Opsz48 from '../components/InsertChartFill0Wght500Grad0Opsz48'
import IconInsertChartFill0Wght600Grad0Opsz48 from '../components/InsertChartFill0Wght600Grad0Opsz48'
import IconInsertChartFill0Wght700Grad0Opsz48 from '../components/InsertChartFill0Wght700Grad0Opsz48'
import IconInsertChartFill1Wght100Grad0Opsz48 from '../components/InsertChartFill1Wght100Grad0Opsz48'
import IconInsertChartFill1Wght200Grad0Opsz48 from '../components/InsertChartFill1Wght200Grad0Opsz48'
import IconInsertChartFill1Wght300Grad0Opsz48 from '../components/InsertChartFill1Wght300Grad0Opsz48'
import IconInsertChartFill1Wght400Grad0Opsz48 from '../components/InsertChartFill1Wght400Grad0Opsz48'
import IconInsertChartFill1Wght500Grad0Opsz48 from '../components/InsertChartFill1Wght500Grad0Opsz48'
import IconInsertChartFill1Wght600Grad0Opsz48 from '../components/InsertChartFill1Wght600Grad0Opsz48'
import IconInsertChartFill1Wght700Grad0Opsz48 from '../components/InsertChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInsertChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInsertChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInsertChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInsertChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInsertChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInsertChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInsertChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInsertChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInsertChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInsertChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInsertChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInsertChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInsertChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInsertChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInsertChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
