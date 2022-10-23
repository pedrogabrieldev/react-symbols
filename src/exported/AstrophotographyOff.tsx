import IconAstrophotographyOffFill0Wght100Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght100Grad0Opsz48'
import IconAstrophotographyOffFill0Wght200Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght200Grad0Opsz48'
import IconAstrophotographyOffFill0Wght300Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght300Grad0Opsz48'
import IconAstrophotographyOffFill0Wght400Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght400Grad0Opsz48'
import IconAstrophotographyOffFill0Wght500Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght500Grad0Opsz48'
import IconAstrophotographyOffFill0Wght600Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght600Grad0Opsz48'
import IconAstrophotographyOffFill0Wght700Grad0Opsz48 from '../components/AstrophotographyOffFill0Wght700Grad0Opsz48'
import IconAstrophotographyOffFill1Wght100Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght100Grad0Opsz48'
import IconAstrophotographyOffFill1Wght200Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght200Grad0Opsz48'
import IconAstrophotographyOffFill1Wght300Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght300Grad0Opsz48'
import IconAstrophotographyOffFill1Wght400Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght400Grad0Opsz48'
import IconAstrophotographyOffFill1Wght500Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght500Grad0Opsz48'
import IconAstrophotographyOffFill1Wght600Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght600Grad0Opsz48'
import IconAstrophotographyOffFill1Wght700Grad0Opsz48 from '../components/AstrophotographyOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAstrophotographyOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAstrophotographyOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAstrophotographyOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAstrophotographyOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAstrophotographyOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAstrophotographyOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAstrophotographyOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAstrophotographyOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAstrophotographyOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAstrophotographyOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAstrophotographyOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAstrophotographyOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAstrophotographyOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAstrophotographyOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAstrophotographyOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
