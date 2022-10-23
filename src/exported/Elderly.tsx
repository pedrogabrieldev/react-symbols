import IconElderlyFill0Wght100Grad0Opsz48 from '../components/ElderlyFill0Wght100Grad0Opsz48'
import IconElderlyFill0Wght200Grad0Opsz48 from '../components/ElderlyFill0Wght200Grad0Opsz48'
import IconElderlyFill0Wght300Grad0Opsz48 from '../components/ElderlyFill0Wght300Grad0Opsz48'
import IconElderlyFill0Wght400Grad0Opsz48 from '../components/ElderlyFill0Wght400Grad0Opsz48'
import IconElderlyFill0Wght500Grad0Opsz48 from '../components/ElderlyFill0Wght500Grad0Opsz48'
import IconElderlyFill0Wght600Grad0Opsz48 from '../components/ElderlyFill0Wght600Grad0Opsz48'
import IconElderlyFill0Wght700Grad0Opsz48 from '../components/ElderlyFill0Wght700Grad0Opsz48'
import IconElderlyFill1Wght100Grad0Opsz48 from '../components/ElderlyFill1Wght100Grad0Opsz48'
import IconElderlyFill1Wght200Grad0Opsz48 from '../components/ElderlyFill1Wght200Grad0Opsz48'
import IconElderlyFill1Wght300Grad0Opsz48 from '../components/ElderlyFill1Wght300Grad0Opsz48'
import IconElderlyFill1Wght400Grad0Opsz48 from '../components/ElderlyFill1Wght400Grad0Opsz48'
import IconElderlyFill1Wght500Grad0Opsz48 from '../components/ElderlyFill1Wght500Grad0Opsz48'
import IconElderlyFill1Wght600Grad0Opsz48 from '../components/ElderlyFill1Wght600Grad0Opsz48'
import IconElderlyFill1Wght700Grad0Opsz48 from '../components/ElderlyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElderly = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElderlyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElderlyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElderlyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElderlyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElderlyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElderlyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElderlyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElderlyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElderlyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElderlyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElderlyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElderlyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElderlyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElderlyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
