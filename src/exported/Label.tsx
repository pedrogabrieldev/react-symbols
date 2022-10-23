import IconLabelFill0Wght100Grad0Opsz48 from '../components/LabelFill0Wght100Grad0Opsz48'
import IconLabelFill0Wght200Grad0Opsz48 from '../components/LabelFill0Wght200Grad0Opsz48'
import IconLabelFill0Wght300Grad0Opsz48 from '../components/LabelFill0Wght300Grad0Opsz48'
import IconLabelFill0Wght400Grad0Opsz48 from '../components/LabelFill0Wght400Grad0Opsz48'
import IconLabelFill0Wght500Grad0Opsz48 from '../components/LabelFill0Wght500Grad0Opsz48'
import IconLabelFill0Wght600Grad0Opsz48 from '../components/LabelFill0Wght600Grad0Opsz48'
import IconLabelFill0Wght700Grad0Opsz48 from '../components/LabelFill0Wght700Grad0Opsz48'
import IconLabelFill1Wght100Grad0Opsz48 from '../components/LabelFill1Wght100Grad0Opsz48'
import IconLabelFill1Wght200Grad0Opsz48 from '../components/LabelFill1Wght200Grad0Opsz48'
import IconLabelFill1Wght300Grad0Opsz48 from '../components/LabelFill1Wght300Grad0Opsz48'
import IconLabelFill1Wght400Grad0Opsz48 from '../components/LabelFill1Wght400Grad0Opsz48'
import IconLabelFill1Wght500Grad0Opsz48 from '../components/LabelFill1Wght500Grad0Opsz48'
import IconLabelFill1Wght600Grad0Opsz48 from '../components/LabelFill1Wght600Grad0Opsz48'
import IconLabelFill1Wght700Grad0Opsz48 from '../components/LabelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLabel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLabelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLabelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLabelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLabelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLabelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLabelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLabelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLabelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLabelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLabelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLabelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLabelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLabelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLabelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
