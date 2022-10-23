import IconOnDeviceTrainingFill0Wght100Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght100Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght200Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght200Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght300Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght300Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght400Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght400Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght500Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght500Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght600Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght600Grad0Opsz48'
import IconOnDeviceTrainingFill0Wght700Grad0Opsz48 from '../components/OnDeviceTrainingFill0Wght700Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght100Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght100Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght200Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght200Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght300Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght300Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght400Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght400Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght500Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght500Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght600Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght600Grad0Opsz48'
import IconOnDeviceTrainingFill1Wght700Grad0Opsz48 from '../components/OnDeviceTrainingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOnDeviceTraining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOnDeviceTrainingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOnDeviceTrainingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOnDeviceTrainingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOnDeviceTrainingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOnDeviceTrainingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOnDeviceTrainingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOnDeviceTrainingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOnDeviceTrainingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOnDeviceTrainingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOnDeviceTrainingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOnDeviceTrainingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOnDeviceTrainingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOnDeviceTrainingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOnDeviceTrainingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
