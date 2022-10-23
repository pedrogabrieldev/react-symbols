import IconAstrophotographyAutoFill0Wght100Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght100Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght200Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght200Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght300Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght300Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght400Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght400Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght500Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght500Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght600Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght600Grad0Opsz48'
import IconAstrophotographyAutoFill0Wght700Grad0Opsz48 from '../components/AstrophotographyAutoFill0Wght700Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght100Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght100Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght200Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght200Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght300Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght300Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght400Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght400Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght500Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght500Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght600Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght600Grad0Opsz48'
import IconAstrophotographyAutoFill1Wght700Grad0Opsz48 from '../components/AstrophotographyAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAstrophotographyAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAstrophotographyAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAstrophotographyAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAstrophotographyAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAstrophotographyAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAstrophotographyAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAstrophotographyAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAstrophotographyAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAstrophotographyAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAstrophotographyAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAstrophotographyAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAstrophotographyAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAstrophotographyAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAstrophotographyAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAstrophotographyAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
