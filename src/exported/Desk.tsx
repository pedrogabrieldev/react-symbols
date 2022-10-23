import IconDeskFill0Wght100Grad0Opsz48 from '../components/DeskFill0Wght100Grad0Opsz48'
import IconDeskFill0Wght200Grad0Opsz48 from '../components/DeskFill0Wght200Grad0Opsz48'
import IconDeskFill0Wght300Grad0Opsz48 from '../components/DeskFill0Wght300Grad0Opsz48'
import IconDeskFill0Wght400Grad0Opsz48 from '../components/DeskFill0Wght400Grad0Opsz48'
import IconDeskFill0Wght500Grad0Opsz48 from '../components/DeskFill0Wght500Grad0Opsz48'
import IconDeskFill0Wght600Grad0Opsz48 from '../components/DeskFill0Wght600Grad0Opsz48'
import IconDeskFill0Wght700Grad0Opsz48 from '../components/DeskFill0Wght700Grad0Opsz48'
import IconDeskFill1Wght100Grad0Opsz48 from '../components/DeskFill1Wght100Grad0Opsz48'
import IconDeskFill1Wght200Grad0Opsz48 from '../components/DeskFill1Wght200Grad0Opsz48'
import IconDeskFill1Wght300Grad0Opsz48 from '../components/DeskFill1Wght300Grad0Opsz48'
import IconDeskFill1Wght400Grad0Opsz48 from '../components/DeskFill1Wght400Grad0Opsz48'
import IconDeskFill1Wght500Grad0Opsz48 from '../components/DeskFill1Wght500Grad0Opsz48'
import IconDeskFill1Wght600Grad0Opsz48 from '../components/DeskFill1Wght600Grad0Opsz48'
import IconDeskFill1Wght700Grad0Opsz48 from '../components/DeskFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDesk = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeskFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeskFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeskFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeskFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeskFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeskFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeskFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeskFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeskFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeskFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeskFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeskFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeskFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeskFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
