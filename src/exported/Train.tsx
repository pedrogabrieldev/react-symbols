import IconTrainFill0Wght100Grad0Opsz48 from '../components/TrainFill0Wght100Grad0Opsz48'
import IconTrainFill0Wght200Grad0Opsz48 from '../components/TrainFill0Wght200Grad0Opsz48'
import IconTrainFill0Wght300Grad0Opsz48 from '../components/TrainFill0Wght300Grad0Opsz48'
import IconTrainFill0Wght400Grad0Opsz48 from '../components/TrainFill0Wght400Grad0Opsz48'
import IconTrainFill0Wght500Grad0Opsz48 from '../components/TrainFill0Wght500Grad0Opsz48'
import IconTrainFill0Wght600Grad0Opsz48 from '../components/TrainFill0Wght600Grad0Opsz48'
import IconTrainFill0Wght700Grad0Opsz48 from '../components/TrainFill0Wght700Grad0Opsz48'
import IconTrainFill1Wght100Grad0Opsz48 from '../components/TrainFill1Wght100Grad0Opsz48'
import IconTrainFill1Wght200Grad0Opsz48 from '../components/TrainFill1Wght200Grad0Opsz48'
import IconTrainFill1Wght300Grad0Opsz48 from '../components/TrainFill1Wght300Grad0Opsz48'
import IconTrainFill1Wght400Grad0Opsz48 from '../components/TrainFill1Wght400Grad0Opsz48'
import IconTrainFill1Wght500Grad0Opsz48 from '../components/TrainFill1Wght500Grad0Opsz48'
import IconTrainFill1Wght600Grad0Opsz48 from '../components/TrainFill1Wght600Grad0Opsz48'
import IconTrainFill1Wght700Grad0Opsz48 from '../components/TrainFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrain = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrainFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrainFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrainFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrainFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrainFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrainFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrainFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrainFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrainFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrainFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrainFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrainFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrainFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrainFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
