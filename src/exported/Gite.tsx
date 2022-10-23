import IconGiteFill0Wght100Grad0Opsz48 from '../components/GiteFill0Wght100Grad0Opsz48'
import IconGiteFill0Wght200Grad0Opsz48 from '../components/GiteFill0Wght200Grad0Opsz48'
import IconGiteFill0Wght300Grad0Opsz48 from '../components/GiteFill0Wght300Grad0Opsz48'
import IconGiteFill0Wght400Grad0Opsz48 from '../components/GiteFill0Wght400Grad0Opsz48'
import IconGiteFill0Wght500Grad0Opsz48 from '../components/GiteFill0Wght500Grad0Opsz48'
import IconGiteFill0Wght600Grad0Opsz48 from '../components/GiteFill0Wght600Grad0Opsz48'
import IconGiteFill0Wght700Grad0Opsz48 from '../components/GiteFill0Wght700Grad0Opsz48'
import IconGiteFill1Wght100Grad0Opsz48 from '../components/GiteFill1Wght100Grad0Opsz48'
import IconGiteFill1Wght200Grad0Opsz48 from '../components/GiteFill1Wght200Grad0Opsz48'
import IconGiteFill1Wght300Grad0Opsz48 from '../components/GiteFill1Wght300Grad0Opsz48'
import IconGiteFill1Wght400Grad0Opsz48 from '../components/GiteFill1Wght400Grad0Opsz48'
import IconGiteFill1Wght500Grad0Opsz48 from '../components/GiteFill1Wght500Grad0Opsz48'
import IconGiteFill1Wght600Grad0Opsz48 from '../components/GiteFill1Wght600Grad0Opsz48'
import IconGiteFill1Wght700Grad0Opsz48 from '../components/GiteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGite = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGiteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGiteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGiteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGiteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGiteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGiteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGiteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGiteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGiteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGiteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGiteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGiteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGiteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGiteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
