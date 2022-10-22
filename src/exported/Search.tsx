
  import SearchFill1Wght100Grad0Opsz48 from '../components/SearchFill1Wght100Grad0Opsz48'
  import SearchFill1Wght200Grad0Opsz48 from '../components/SearchFill1Wght200Grad0Opsz48'
  import SearchFill1Wght300Grad0Opsz48 from '../components/SearchFill1Wght300Grad0Opsz48'
  import SearchFill1Wght400Grad0Opsz48 from '../components/SearchFill1Wght400Grad0Opsz48'
  import SearchFill1Wght500Grad0Opsz48 from '../components/SearchFill1Wght500Grad0Opsz48'
  import SearchFill1Wght600Grad0Opsz48 from '../components/SearchFill1Wght600Grad0Opsz48'
  import SearchFill1Wght700Grad0Opsz48 from '../components/SearchFill1Wght700Grad0Opsz48'
  import SearchFill0Wght100Grad0Opsz48 from '../components/SearchFill0Wght100Grad0Opsz48'
  import SearchFill0Wght200Grad0Opsz48 from '../components/SearchFill0Wght200Grad0Opsz48'
  import SearchFill0Wght300Grad0Opsz48 from '../components/SearchFill0Wght300Grad0Opsz48'
  import SearchFill0Wght400Grad0Opsz48 from '../components/SearchFill0Wght400Grad0Opsz48'
  import SearchFill0Wght500Grad0Opsz48 from '../components/SearchFill0Wght500Grad0Opsz48'
  import SearchFill0Wght600Grad0Opsz48 from '../components/SearchFill0Wght600Grad0Opsz48'
  import SearchFill0Wght700Grad0Opsz48 from '../components/SearchFill0Wght700Grad0Opsz48'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const Search = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <SearchFill1Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <SearchFill1Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <SearchFill1Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <SearchFill1Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <SearchFill1Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <SearchFill1Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <SearchFill1Wght700Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <SearchFill0Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <SearchFill0Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <SearchFill0Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <SearchFill0Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <SearchFill0Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <SearchFill0Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <SearchFill0Wght700Grad0Opsz48 size={size} color={color} />
      default:
        return null
    }
  }
