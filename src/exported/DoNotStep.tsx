import IconDoNotStepFill0Wght100Grad0Opsz48 from '../components/DoNotStepFill0Wght100Grad0Opsz48'
import IconDoNotStepFill0Wght200Grad0Opsz48 from '../components/DoNotStepFill0Wght200Grad0Opsz48'
import IconDoNotStepFill0Wght300Grad0Opsz48 from '../components/DoNotStepFill0Wght300Grad0Opsz48'
import IconDoNotStepFill0Wght400Grad0Opsz48 from '../components/DoNotStepFill0Wght400Grad0Opsz48'
import IconDoNotStepFill0Wght500Grad0Opsz48 from '../components/DoNotStepFill0Wght500Grad0Opsz48'
import IconDoNotStepFill0Wght600Grad0Opsz48 from '../components/DoNotStepFill0Wght600Grad0Opsz48'
import IconDoNotStepFill0Wght700Grad0Opsz48 from '../components/DoNotStepFill0Wght700Grad0Opsz48'
import IconDoNotStepFill1Wght100Grad0Opsz48 from '../components/DoNotStepFill1Wght100Grad0Opsz48'
import IconDoNotStepFill1Wght200Grad0Opsz48 from '../components/DoNotStepFill1Wght200Grad0Opsz48'
import IconDoNotStepFill1Wght300Grad0Opsz48 from '../components/DoNotStepFill1Wght300Grad0Opsz48'
import IconDoNotStepFill1Wght400Grad0Opsz48 from '../components/DoNotStepFill1Wght400Grad0Opsz48'
import IconDoNotStepFill1Wght500Grad0Opsz48 from '../components/DoNotStepFill1Wght500Grad0Opsz48'
import IconDoNotStepFill1Wght600Grad0Opsz48 from '../components/DoNotStepFill1Wght600Grad0Opsz48'
import IconDoNotStepFill1Wght700Grad0Opsz48 from '../components/DoNotStepFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoNotStep = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoNotStepFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoNotStepFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoNotStepFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoNotStepFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoNotStepFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoNotStepFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoNotStepFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoNotStepFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoNotStepFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoNotStepFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoNotStepFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoNotStepFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoNotStepFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoNotStepFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
