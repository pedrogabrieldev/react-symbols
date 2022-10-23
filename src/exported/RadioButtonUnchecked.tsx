import IconRadioButtonUncheckedFill0Wght100Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght100Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght200Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght200Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght300Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght300Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght400Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght400Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght500Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght500Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght600Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght600Grad0Opsz48'
import IconRadioButtonUncheckedFill0Wght700Grad0Opsz48 from '../components/RadioButtonUncheckedFill0Wght700Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght100Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght100Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght200Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght200Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght300Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght300Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght400Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght400Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght500Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght500Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght600Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght600Grad0Opsz48'
import IconRadioButtonUncheckedFill1Wght700Grad0Opsz48 from '../components/RadioButtonUncheckedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRadioButtonUnchecked = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRadioButtonUncheckedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRadioButtonUncheckedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRadioButtonUncheckedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRadioButtonUncheckedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRadioButtonUncheckedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRadioButtonUncheckedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRadioButtonUncheckedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRadioButtonUncheckedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRadioButtonUncheckedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRadioButtonUncheckedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRadioButtonUncheckedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRadioButtonUncheckedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRadioButtonUncheckedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRadioButtonUncheckedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
