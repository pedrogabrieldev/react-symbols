import IconAutoFixHighFill0Wght100Grad0Opsz48 from '../components/AutoFixHighFill0Wght100Grad0Opsz48'
import IconAutoFixHighFill0Wght200Grad0Opsz48 from '../components/AutoFixHighFill0Wght200Grad0Opsz48'
import IconAutoFixHighFill0Wght300Grad0Opsz48 from '../components/AutoFixHighFill0Wght300Grad0Opsz48'
import IconAutoFixHighFill0Wght400Grad0Opsz48 from '../components/AutoFixHighFill0Wght400Grad0Opsz48'
import IconAutoFixHighFill0Wght500Grad0Opsz48 from '../components/AutoFixHighFill0Wght500Grad0Opsz48'
import IconAutoFixHighFill0Wght600Grad0Opsz48 from '../components/AutoFixHighFill0Wght600Grad0Opsz48'
import IconAutoFixHighFill0Wght700Grad0Opsz48 from '../components/AutoFixHighFill0Wght700Grad0Opsz48'
import IconAutoFixHighFill1Wght100Grad0Opsz48 from '../components/AutoFixHighFill1Wght100Grad0Opsz48'
import IconAutoFixHighFill1Wght200Grad0Opsz48 from '../components/AutoFixHighFill1Wght200Grad0Opsz48'
import IconAutoFixHighFill1Wght300Grad0Opsz48 from '../components/AutoFixHighFill1Wght300Grad0Opsz48'
import IconAutoFixHighFill1Wght400Grad0Opsz48 from '../components/AutoFixHighFill1Wght400Grad0Opsz48'
import IconAutoFixHighFill1Wght500Grad0Opsz48 from '../components/AutoFixHighFill1Wght500Grad0Opsz48'
import IconAutoFixHighFill1Wght600Grad0Opsz48 from '../components/AutoFixHighFill1Wght600Grad0Opsz48'
import IconAutoFixHighFill1Wght700Grad0Opsz48 from '../components/AutoFixHighFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoFixHigh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoFixHighFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoFixHighFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoFixHighFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoFixHighFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoFixHighFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoFixHighFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoFixHighFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoFixHighFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoFixHighFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoFixHighFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoFixHighFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoFixHighFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoFixHighFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoFixHighFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
