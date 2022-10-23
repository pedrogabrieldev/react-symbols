import IconLabelOffFill0Wght100Grad0Opsz48 from '../components/LabelOffFill0Wght100Grad0Opsz48'
import IconLabelOffFill0Wght200Grad0Opsz48 from '../components/LabelOffFill0Wght200Grad0Opsz48'
import IconLabelOffFill0Wght300Grad0Opsz48 from '../components/LabelOffFill0Wght300Grad0Opsz48'
import IconLabelOffFill0Wght400Grad0Opsz48 from '../components/LabelOffFill0Wght400Grad0Opsz48'
import IconLabelOffFill0Wght500Grad0Opsz48 from '../components/LabelOffFill0Wght500Grad0Opsz48'
import IconLabelOffFill0Wght600Grad0Opsz48 from '../components/LabelOffFill0Wght600Grad0Opsz48'
import IconLabelOffFill0Wght700Grad0Opsz48 from '../components/LabelOffFill0Wght700Grad0Opsz48'
import IconLabelOffFill1Wght100Grad0Opsz48 from '../components/LabelOffFill1Wght100Grad0Opsz48'
import IconLabelOffFill1Wght200Grad0Opsz48 from '../components/LabelOffFill1Wght200Grad0Opsz48'
import IconLabelOffFill1Wght300Grad0Opsz48 from '../components/LabelOffFill1Wght300Grad0Opsz48'
import IconLabelOffFill1Wght400Grad0Opsz48 from '../components/LabelOffFill1Wght400Grad0Opsz48'
import IconLabelOffFill1Wght500Grad0Opsz48 from '../components/LabelOffFill1Wght500Grad0Opsz48'
import IconLabelOffFill1Wght600Grad0Opsz48 from '../components/LabelOffFill1Wght600Grad0Opsz48'
import IconLabelOffFill1Wght700Grad0Opsz48 from '../components/LabelOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLabelOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLabelOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLabelOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLabelOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLabelOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLabelOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLabelOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLabelOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLabelOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLabelOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLabelOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLabelOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLabelOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLabelOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLabelOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
