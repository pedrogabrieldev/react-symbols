import IconElderlyWomanFill0Wght100Grad0Opsz48 from '../components/ElderlyWomanFill0Wght100Grad0Opsz48'
import IconElderlyWomanFill0Wght200Grad0Opsz48 from '../components/ElderlyWomanFill0Wght200Grad0Opsz48'
import IconElderlyWomanFill0Wght300Grad0Opsz48 from '../components/ElderlyWomanFill0Wght300Grad0Opsz48'
import IconElderlyWomanFill0Wght400Grad0Opsz48 from '../components/ElderlyWomanFill0Wght400Grad0Opsz48'
import IconElderlyWomanFill0Wght500Grad0Opsz48 from '../components/ElderlyWomanFill0Wght500Grad0Opsz48'
import IconElderlyWomanFill0Wght600Grad0Opsz48 from '../components/ElderlyWomanFill0Wght600Grad0Opsz48'
import IconElderlyWomanFill0Wght700Grad0Opsz48 from '../components/ElderlyWomanFill0Wght700Grad0Opsz48'
import IconElderlyWomanFill1Wght100Grad0Opsz48 from '../components/ElderlyWomanFill1Wght100Grad0Opsz48'
import IconElderlyWomanFill1Wght200Grad0Opsz48 from '../components/ElderlyWomanFill1Wght200Grad0Opsz48'
import IconElderlyWomanFill1Wght300Grad0Opsz48 from '../components/ElderlyWomanFill1Wght300Grad0Opsz48'
import IconElderlyWomanFill1Wght400Grad0Opsz48 from '../components/ElderlyWomanFill1Wght400Grad0Opsz48'
import IconElderlyWomanFill1Wght500Grad0Opsz48 from '../components/ElderlyWomanFill1Wght500Grad0Opsz48'
import IconElderlyWomanFill1Wght600Grad0Opsz48 from '../components/ElderlyWomanFill1Wght600Grad0Opsz48'
import IconElderlyWomanFill1Wght700Grad0Opsz48 from '../components/ElderlyWomanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElderlyWoman = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElderlyWomanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElderlyWomanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElderlyWomanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElderlyWomanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElderlyWomanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElderlyWomanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElderlyWomanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElderlyWomanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElderlyWomanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElderlyWomanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElderlyWomanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElderlyWomanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElderlyWomanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElderlyWomanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
