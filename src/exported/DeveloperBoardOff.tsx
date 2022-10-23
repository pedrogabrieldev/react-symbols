import IconDeveloperBoardOffFill0Wght100Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght100Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght200Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght200Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght300Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght300Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght400Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght400Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght500Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght500Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght600Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght600Grad0Opsz48'
import IconDeveloperBoardOffFill0Wght700Grad0Opsz48 from '../components/DeveloperBoardOffFill0Wght700Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght100Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght100Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght200Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght200Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght300Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght300Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght400Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght400Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght500Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght500Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght600Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght600Grad0Opsz48'
import IconDeveloperBoardOffFill1Wght700Grad0Opsz48 from '../components/DeveloperBoardOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeveloperBoardOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeveloperBoardOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeveloperBoardOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeveloperBoardOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeveloperBoardOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeveloperBoardOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeveloperBoardOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeveloperBoardOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeveloperBoardOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeveloperBoardOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeveloperBoardOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeveloperBoardOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeveloperBoardOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeveloperBoardOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeveloperBoardOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
