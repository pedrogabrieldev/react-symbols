import IconSaveAsFill0Wght100Grad0Opsz48 from '../components/SaveAsFill0Wght100Grad0Opsz48'
import IconSaveAsFill0Wght200Grad0Opsz48 from '../components/SaveAsFill0Wght200Grad0Opsz48'
import IconSaveAsFill0Wght300Grad0Opsz48 from '../components/SaveAsFill0Wght300Grad0Opsz48'
import IconSaveAsFill0Wght400Grad0Opsz48 from '../components/SaveAsFill0Wght400Grad0Opsz48'
import IconSaveAsFill0Wght500Grad0Opsz48 from '../components/SaveAsFill0Wght500Grad0Opsz48'
import IconSaveAsFill0Wght600Grad0Opsz48 from '../components/SaveAsFill0Wght600Grad0Opsz48'
import IconSaveAsFill0Wght700Grad0Opsz48 from '../components/SaveAsFill0Wght700Grad0Opsz48'
import IconSaveAsFill1Wght100Grad0Opsz48 from '../components/SaveAsFill1Wght100Grad0Opsz48'
import IconSaveAsFill1Wght200Grad0Opsz48 from '../components/SaveAsFill1Wght200Grad0Opsz48'
import IconSaveAsFill1Wght300Grad0Opsz48 from '../components/SaveAsFill1Wght300Grad0Opsz48'
import IconSaveAsFill1Wght400Grad0Opsz48 from '../components/SaveAsFill1Wght400Grad0Opsz48'
import IconSaveAsFill1Wght500Grad0Opsz48 from '../components/SaveAsFill1Wght500Grad0Opsz48'
import IconSaveAsFill1Wght600Grad0Opsz48 from '../components/SaveAsFill1Wght600Grad0Opsz48'
import IconSaveAsFill1Wght700Grad0Opsz48 from '../components/SaveAsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSaveAs = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSaveAsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSaveAsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSaveAsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSaveAsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSaveAsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSaveAsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSaveAsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSaveAsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSaveAsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSaveAsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSaveAsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSaveAsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSaveAsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSaveAsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
