import IconSaveFill0Wght100Grad0Opsz48 from '../components/SaveFill0Wght100Grad0Opsz48'
import IconSaveFill0Wght200Grad0Opsz48 from '../components/SaveFill0Wght200Grad0Opsz48'
import IconSaveFill0Wght300Grad0Opsz48 from '../components/SaveFill0Wght300Grad0Opsz48'
import IconSaveFill0Wght400Grad0Opsz48 from '../components/SaveFill0Wght400Grad0Opsz48'
import IconSaveFill0Wght500Grad0Opsz48 from '../components/SaveFill0Wght500Grad0Opsz48'
import IconSaveFill0Wght600Grad0Opsz48 from '../components/SaveFill0Wght600Grad0Opsz48'
import IconSaveFill0Wght700Grad0Opsz48 from '../components/SaveFill0Wght700Grad0Opsz48'
import IconSaveFill1Wght100Grad0Opsz48 from '../components/SaveFill1Wght100Grad0Opsz48'
import IconSaveFill1Wght200Grad0Opsz48 from '../components/SaveFill1Wght200Grad0Opsz48'
import IconSaveFill1Wght300Grad0Opsz48 from '../components/SaveFill1Wght300Grad0Opsz48'
import IconSaveFill1Wght400Grad0Opsz48 from '../components/SaveFill1Wght400Grad0Opsz48'
import IconSaveFill1Wght500Grad0Opsz48 from '../components/SaveFill1Wght500Grad0Opsz48'
import IconSaveFill1Wght600Grad0Opsz48 from '../components/SaveFill1Wght600Grad0Opsz48'
import IconSaveFill1Wght700Grad0Opsz48 from '../components/SaveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSave = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSaveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSaveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSaveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSaveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSaveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSaveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSaveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSaveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSaveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSaveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSaveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSaveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSaveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSaveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
