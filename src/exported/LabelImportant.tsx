import IconLabelImportantFill0Wght100Grad0Opsz48 from '../components/LabelImportantFill0Wght100Grad0Opsz48'
import IconLabelImportantFill0Wght200Grad0Opsz48 from '../components/LabelImportantFill0Wght200Grad0Opsz48'
import IconLabelImportantFill0Wght300Grad0Opsz48 from '../components/LabelImportantFill0Wght300Grad0Opsz48'
import IconLabelImportantFill0Wght400Grad0Opsz48 from '../components/LabelImportantFill0Wght400Grad0Opsz48'
import IconLabelImportantFill0Wght500Grad0Opsz48 from '../components/LabelImportantFill0Wght500Grad0Opsz48'
import IconLabelImportantFill0Wght600Grad0Opsz48 from '../components/LabelImportantFill0Wght600Grad0Opsz48'
import IconLabelImportantFill0Wght700Grad0Opsz48 from '../components/LabelImportantFill0Wght700Grad0Opsz48'
import IconLabelImportantFill1Wght100Grad0Opsz48 from '../components/LabelImportantFill1Wght100Grad0Opsz48'
import IconLabelImportantFill1Wght200Grad0Opsz48 from '../components/LabelImportantFill1Wght200Grad0Opsz48'
import IconLabelImportantFill1Wght300Grad0Opsz48 from '../components/LabelImportantFill1Wght300Grad0Opsz48'
import IconLabelImportantFill1Wght400Grad0Opsz48 from '../components/LabelImportantFill1Wght400Grad0Opsz48'
import IconLabelImportantFill1Wght500Grad0Opsz48 from '../components/LabelImportantFill1Wght500Grad0Opsz48'
import IconLabelImportantFill1Wght600Grad0Opsz48 from '../components/LabelImportantFill1Wght600Grad0Opsz48'
import IconLabelImportantFill1Wght700Grad0Opsz48 from '../components/LabelImportantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLabelImportant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLabelImportantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLabelImportantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLabelImportantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLabelImportantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLabelImportantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLabelImportantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLabelImportantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLabelImportantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLabelImportantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLabelImportantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLabelImportantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLabelImportantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLabelImportantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLabelImportantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
