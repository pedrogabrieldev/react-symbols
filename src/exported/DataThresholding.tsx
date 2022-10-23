import IconDataThresholdingFill0Wght100Grad0Opsz48 from '../components/DataThresholdingFill0Wght100Grad0Opsz48'
import IconDataThresholdingFill0Wght200Grad0Opsz48 from '../components/DataThresholdingFill0Wght200Grad0Opsz48'
import IconDataThresholdingFill0Wght300Grad0Opsz48 from '../components/DataThresholdingFill0Wght300Grad0Opsz48'
import IconDataThresholdingFill0Wght400Grad0Opsz48 from '../components/DataThresholdingFill0Wght400Grad0Opsz48'
import IconDataThresholdingFill0Wght500Grad0Opsz48 from '../components/DataThresholdingFill0Wght500Grad0Opsz48'
import IconDataThresholdingFill0Wght600Grad0Opsz48 from '../components/DataThresholdingFill0Wght600Grad0Opsz48'
import IconDataThresholdingFill0Wght700Grad0Opsz48 from '../components/DataThresholdingFill0Wght700Grad0Opsz48'
import IconDataThresholdingFill1Wght100Grad0Opsz48 from '../components/DataThresholdingFill1Wght100Grad0Opsz48'
import IconDataThresholdingFill1Wght200Grad0Opsz48 from '../components/DataThresholdingFill1Wght200Grad0Opsz48'
import IconDataThresholdingFill1Wght300Grad0Opsz48 from '../components/DataThresholdingFill1Wght300Grad0Opsz48'
import IconDataThresholdingFill1Wght400Grad0Opsz48 from '../components/DataThresholdingFill1Wght400Grad0Opsz48'
import IconDataThresholdingFill1Wght500Grad0Opsz48 from '../components/DataThresholdingFill1Wght500Grad0Opsz48'
import IconDataThresholdingFill1Wght600Grad0Opsz48 from '../components/DataThresholdingFill1Wght600Grad0Opsz48'
import IconDataThresholdingFill1Wght700Grad0Opsz48 from '../components/DataThresholdingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataThresholding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataThresholdingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataThresholdingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataThresholdingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataThresholdingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataThresholdingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataThresholdingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataThresholdingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataThresholdingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataThresholdingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataThresholdingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataThresholdingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataThresholdingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataThresholdingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataThresholdingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
