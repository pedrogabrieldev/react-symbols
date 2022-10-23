import IconRadioButtonCheckedFill0Wght100Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght100Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght200Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght200Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght300Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght300Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght400Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght400Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght500Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght500Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght600Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght600Grad0Opsz48'
import IconRadioButtonCheckedFill0Wght700Grad0Opsz48 from '../components/RadioButtonCheckedFill0Wght700Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght100Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght100Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght200Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght200Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght300Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght300Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght400Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght400Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght500Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght500Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght600Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght600Grad0Opsz48'
import IconRadioButtonCheckedFill1Wght700Grad0Opsz48 from '../components/RadioButtonCheckedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRadioButtonChecked = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRadioButtonCheckedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRadioButtonCheckedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRadioButtonCheckedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRadioButtonCheckedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRadioButtonCheckedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRadioButtonCheckedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRadioButtonCheckedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRadioButtonCheckedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRadioButtonCheckedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRadioButtonCheckedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRadioButtonCheckedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRadioButtonCheckedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRadioButtonCheckedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRadioButtonCheckedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
