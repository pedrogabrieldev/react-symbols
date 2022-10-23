import IconRadioFill0Wght100Grad0Opsz48 from '../components/RadioFill0Wght100Grad0Opsz48'
import IconRadioFill0Wght200Grad0Opsz48 from '../components/RadioFill0Wght200Grad0Opsz48'
import IconRadioFill0Wght300Grad0Opsz48 from '../components/RadioFill0Wght300Grad0Opsz48'
import IconRadioFill0Wght400Grad0Opsz48 from '../components/RadioFill0Wght400Grad0Opsz48'
import IconRadioFill0Wght500Grad0Opsz48 from '../components/RadioFill0Wght500Grad0Opsz48'
import IconRadioFill0Wght600Grad0Opsz48 from '../components/RadioFill0Wght600Grad0Opsz48'
import IconRadioFill0Wght700Grad0Opsz48 from '../components/RadioFill0Wght700Grad0Opsz48'
import IconRadioFill1Wght100Grad0Opsz48 from '../components/RadioFill1Wght100Grad0Opsz48'
import IconRadioFill1Wght200Grad0Opsz48 from '../components/RadioFill1Wght200Grad0Opsz48'
import IconRadioFill1Wght300Grad0Opsz48 from '../components/RadioFill1Wght300Grad0Opsz48'
import IconRadioFill1Wght400Grad0Opsz48 from '../components/RadioFill1Wght400Grad0Opsz48'
import IconRadioFill1Wght500Grad0Opsz48 from '../components/RadioFill1Wght500Grad0Opsz48'
import IconRadioFill1Wght600Grad0Opsz48 from '../components/RadioFill1Wght600Grad0Opsz48'
import IconRadioFill1Wght700Grad0Opsz48 from '../components/RadioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRadio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRadioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRadioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRadioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRadioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRadioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRadioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRadioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRadioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRadioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRadioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRadioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRadioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRadioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRadioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
