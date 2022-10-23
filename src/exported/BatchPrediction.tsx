import IconBatchPredictionFill0Wght100Grad0Opsz48 from '../components/BatchPredictionFill0Wght100Grad0Opsz48'
import IconBatchPredictionFill0Wght200Grad0Opsz48 from '../components/BatchPredictionFill0Wght200Grad0Opsz48'
import IconBatchPredictionFill0Wght300Grad0Opsz48 from '../components/BatchPredictionFill0Wght300Grad0Opsz48'
import IconBatchPredictionFill0Wght400Grad0Opsz48 from '../components/BatchPredictionFill0Wght400Grad0Opsz48'
import IconBatchPredictionFill0Wght500Grad0Opsz48 from '../components/BatchPredictionFill0Wght500Grad0Opsz48'
import IconBatchPredictionFill0Wght600Grad0Opsz48 from '../components/BatchPredictionFill0Wght600Grad0Opsz48'
import IconBatchPredictionFill0Wght700Grad0Opsz48 from '../components/BatchPredictionFill0Wght700Grad0Opsz48'
import IconBatchPredictionFill1Wght100Grad0Opsz48 from '../components/BatchPredictionFill1Wght100Grad0Opsz48'
import IconBatchPredictionFill1Wght200Grad0Opsz48 from '../components/BatchPredictionFill1Wght200Grad0Opsz48'
import IconBatchPredictionFill1Wght300Grad0Opsz48 from '../components/BatchPredictionFill1Wght300Grad0Opsz48'
import IconBatchPredictionFill1Wght400Grad0Opsz48 from '../components/BatchPredictionFill1Wght400Grad0Opsz48'
import IconBatchPredictionFill1Wght500Grad0Opsz48 from '../components/BatchPredictionFill1Wght500Grad0Opsz48'
import IconBatchPredictionFill1Wght600Grad0Opsz48 from '../components/BatchPredictionFill1Wght600Grad0Opsz48'
import IconBatchPredictionFill1Wght700Grad0Opsz48 from '../components/BatchPredictionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatchPrediction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatchPredictionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatchPredictionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatchPredictionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatchPredictionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatchPredictionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatchPredictionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatchPredictionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatchPredictionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatchPredictionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatchPredictionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatchPredictionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatchPredictionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatchPredictionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatchPredictionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
