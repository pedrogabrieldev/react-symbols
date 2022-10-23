import IconDeveloperBoardFill0Wght100Grad0Opsz48 from '../components/DeveloperBoardFill0Wght100Grad0Opsz48'
import IconDeveloperBoardFill0Wght200Grad0Opsz48 from '../components/DeveloperBoardFill0Wght200Grad0Opsz48'
import IconDeveloperBoardFill0Wght300Grad0Opsz48 from '../components/DeveloperBoardFill0Wght300Grad0Opsz48'
import IconDeveloperBoardFill0Wght400Grad0Opsz48 from '../components/DeveloperBoardFill0Wght400Grad0Opsz48'
import IconDeveloperBoardFill0Wght500Grad0Opsz48 from '../components/DeveloperBoardFill0Wght500Grad0Opsz48'
import IconDeveloperBoardFill0Wght600Grad0Opsz48 from '../components/DeveloperBoardFill0Wght600Grad0Opsz48'
import IconDeveloperBoardFill0Wght700Grad0Opsz48 from '../components/DeveloperBoardFill0Wght700Grad0Opsz48'
import IconDeveloperBoardFill1Wght100Grad0Opsz48 from '../components/DeveloperBoardFill1Wght100Grad0Opsz48'
import IconDeveloperBoardFill1Wght200Grad0Opsz48 from '../components/DeveloperBoardFill1Wght200Grad0Opsz48'
import IconDeveloperBoardFill1Wght300Grad0Opsz48 from '../components/DeveloperBoardFill1Wght300Grad0Opsz48'
import IconDeveloperBoardFill1Wght400Grad0Opsz48 from '../components/DeveloperBoardFill1Wght400Grad0Opsz48'
import IconDeveloperBoardFill1Wght500Grad0Opsz48 from '../components/DeveloperBoardFill1Wght500Grad0Opsz48'
import IconDeveloperBoardFill1Wght600Grad0Opsz48 from '../components/DeveloperBoardFill1Wght600Grad0Opsz48'
import IconDeveloperBoardFill1Wght700Grad0Opsz48 from '../components/DeveloperBoardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeveloperBoard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeveloperBoardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeveloperBoardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeveloperBoardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeveloperBoardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeveloperBoardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeveloperBoardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeveloperBoardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeveloperBoardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeveloperBoardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeveloperBoardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeveloperBoardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeveloperBoardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeveloperBoardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeveloperBoardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
