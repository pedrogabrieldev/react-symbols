import IconAddModeratorFill0Wght100Grad0Opsz48 from '../components/AddModeratorFill0Wght100Grad0Opsz48'
import IconAddModeratorFill0Wght200Grad0Opsz48 from '../components/AddModeratorFill0Wght200Grad0Opsz48'
import IconAddModeratorFill0Wght300Grad0Opsz48 from '../components/AddModeratorFill0Wght300Grad0Opsz48'
import IconAddModeratorFill0Wght400Grad0Opsz48 from '../components/AddModeratorFill0Wght400Grad0Opsz48'
import IconAddModeratorFill0Wght500Grad0Opsz48 from '../components/AddModeratorFill0Wght500Grad0Opsz48'
import IconAddModeratorFill0Wght600Grad0Opsz48 from '../components/AddModeratorFill0Wght600Grad0Opsz48'
import IconAddModeratorFill0Wght700Grad0Opsz48 from '../components/AddModeratorFill0Wght700Grad0Opsz48'
import IconAddModeratorFill1Wght100Grad0Opsz48 from '../components/AddModeratorFill1Wght100Grad0Opsz48'
import IconAddModeratorFill1Wght200Grad0Opsz48 from '../components/AddModeratorFill1Wght200Grad0Opsz48'
import IconAddModeratorFill1Wght300Grad0Opsz48 from '../components/AddModeratorFill1Wght300Grad0Opsz48'
import IconAddModeratorFill1Wght400Grad0Opsz48 from '../components/AddModeratorFill1Wght400Grad0Opsz48'
import IconAddModeratorFill1Wght500Grad0Opsz48 from '../components/AddModeratorFill1Wght500Grad0Opsz48'
import IconAddModeratorFill1Wght600Grad0Opsz48 from '../components/AddModeratorFill1Wght600Grad0Opsz48'
import IconAddModeratorFill1Wght700Grad0Opsz48 from '../components/AddModeratorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddModerator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddModeratorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddModeratorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddModeratorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddModeratorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddModeratorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddModeratorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddModeratorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddModeratorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddModeratorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddModeratorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddModeratorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddModeratorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddModeratorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddModeratorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
