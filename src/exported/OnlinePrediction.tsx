import IconOnlinePredictionFill0Wght100Grad0Opsz48 from '../components/OnlinePredictionFill0Wght100Grad0Opsz48'
import IconOnlinePredictionFill0Wght200Grad0Opsz48 from '../components/OnlinePredictionFill0Wght200Grad0Opsz48'
import IconOnlinePredictionFill0Wght300Grad0Opsz48 from '../components/OnlinePredictionFill0Wght300Grad0Opsz48'
import IconOnlinePredictionFill0Wght400Grad0Opsz48 from '../components/OnlinePredictionFill0Wght400Grad0Opsz48'
import IconOnlinePredictionFill0Wght500Grad0Opsz48 from '../components/OnlinePredictionFill0Wght500Grad0Opsz48'
import IconOnlinePredictionFill0Wght600Grad0Opsz48 from '../components/OnlinePredictionFill0Wght600Grad0Opsz48'
import IconOnlinePredictionFill0Wght700Grad0Opsz48 from '../components/OnlinePredictionFill0Wght700Grad0Opsz48'
import IconOnlinePredictionFill1Wght100Grad0Opsz48 from '../components/OnlinePredictionFill1Wght100Grad0Opsz48'
import IconOnlinePredictionFill1Wght200Grad0Opsz48 from '../components/OnlinePredictionFill1Wght200Grad0Opsz48'
import IconOnlinePredictionFill1Wght300Grad0Opsz48 from '../components/OnlinePredictionFill1Wght300Grad0Opsz48'
import IconOnlinePredictionFill1Wght400Grad0Opsz48 from '../components/OnlinePredictionFill1Wght400Grad0Opsz48'
import IconOnlinePredictionFill1Wght500Grad0Opsz48 from '../components/OnlinePredictionFill1Wght500Grad0Opsz48'
import IconOnlinePredictionFill1Wght600Grad0Opsz48 from '../components/OnlinePredictionFill1Wght600Grad0Opsz48'
import IconOnlinePredictionFill1Wght700Grad0Opsz48 from '../components/OnlinePredictionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOnlinePrediction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOnlinePredictionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOnlinePredictionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOnlinePredictionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOnlinePredictionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOnlinePredictionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOnlinePredictionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOnlinePredictionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOnlinePredictionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOnlinePredictionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOnlinePredictionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOnlinePredictionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOnlinePredictionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOnlinePredictionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOnlinePredictionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
